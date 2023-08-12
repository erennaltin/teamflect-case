import{ useEffect, useState } from 'react'
import { DeletePerson, GetPeopleList } from '../../service/People';
import { CheckboxVisibility, DefaultButton, DetailsRow, GroupedList, IColumn, IDetailsRowBaseProps, IGap, IGroup, IGroupRenderProps, Persona, PersonaSize, SelectionMode, Spinner } from '@fluentui/react';
import AddPersonModal from '../../components/Modal/AddPersonModal';
import styles from './app.module.css';

const PeopleList = () => {
  const [people, setPeople] = useState([] as Person[]);
  const [groups, setGroups] = useState([] as IGroup[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    didMount();
  }, []);

  const didMount = async () => {
    setIsLoading(true);
    const response = await GetPeopleList();
    const responsePeople = response.data;

    const sortedPeople = responsePeople.sort((a: Person, b: Person) => {
      return a.sex > b.sex ? 1 : -1;
    });

    let groupedListItems: IGroup[] = sortedPeople.reduce((groups: IGroup[], person: Person, index: number) => {
      const groupKey = person.sex;
      const groupIndex = groups.findIndex(group => group.key === groupKey);
  
      if (groupIndex === -1) {
        groups.push({
          key: groupKey,
          name: person.sex,
          startIndex: index,
          count: 1,
          level: 0,
          isCollapsed: false,
          children: [],
          data: [{profilePicture: `https://picsum.photos/${person.id}/200`, ...person}]
        });
      } else {
        groups[groupIndex].count++;
        groups[groupIndex].data.push({profilePicture: `https://picsum.photos/${person.id}/200`, ...person});
      }
  
      return groups;
    }, []);

    groupedListItems.forEach(group => {
      group.data.sort((a: Person, b: Person) => a.jobTitle.localeCompare(b.jobTitle));
    });

    groupedListItems = groupedListItems.map(group => {
      return {...group, children: group.data.reduce((groups: IGroup[], person: Person, index: number) => {
        const groupKey = person.jobTitle;
        const groupIndex = groups.findIndex(group => group.key === groupKey);
    
        if (groupIndex === -1) {
          groups.push({
            key: groupKey,
            name: person.jobTitle,
            startIndex: group.startIndex + index,
            count: 1,
            level: 1,
            isCollapsed: true,
            children: [],
            data: [person]
          });
        } else {
          groups[groupIndex].count++;
          groups[groupIndex].data.push(person);
        }
    
        return groups;
      }, [])}
    })

    setGroups(groupedListItems);
    setPeople(groupedListItems.flatMap(group => group.children?.flatMap(child => child.data)));
    setIsLoading(false);
  }

  const handleDelete = async (id: number | undefined) => {
    if (id != undefined)
    {
      const deleteResponse = await DeletePerson(id);
      if (deleteResponse.status == 200) {
        await didMount();
      }
    }
  }

  const handleAddPerson = () => {
    didMount();
  };

  const renderProfilePicture = (item: Person) => (<Persona
    imageUrl={item.profilePicture}
    size={PersonaSize.size24}
    hidePersonaDetails={true}
    imageAlt="Profile Photo"
  />)

  const renderHeaderCell = (nestingDepth?: number, group?: IGroup, itemIndex?: number) => {
    const columns: IColumn[] = [
      { key: 'profilePicture', name: 'Profile Picture', fieldName: 'profilePicture', minWidth: 300},
      { key: 'id', name: 'Id', fieldName: 'id', minWidth: 600, maxWidth: 600},
      { key: 'userId', name: 'User Id', fieldName: 'userId', minWidth: 300, maxWidth: 300 },
      { key: 'firstName', name: 'User Id', fieldName: 'firstName', minWidth: 600, maxWidth: 300 },
      { key: 'lastName', name: 'User Id', fieldName: 'lastName', minWidth: 300, maxWidth: 300 },
      { key: 'sex', name: 'User Id', fieldName: 'sex', minWidth: 300, maxWidth: 300 },
      { key: 'email', name: 'User Id', fieldName: 'email', minWidth: 300, maxWidth: 300 },
      { key: 'phone', name: 'User Id', fieldName: 'phone', minWidth: 300, maxWidth: 300 },
      { key: 'dateOfBirth', name: 'User Id', fieldName: 'dateOfBirth', minWidth: 300, maxWidth: 300 },
      { key: 'jobTitle', name: 'User Id', fieldName: 'jobTitle', minWidth: 300, maxWidth: 300 },
    ];

    const columnNames = {
      profilePicture: 'Profile Picture',
      id: 'Id',
      userId: 'User Id',
      firstName: 'First Name',
      lastName: 'Last Name',
      sex: 'Sex',
      email: 'Email',
      phone: 'Phone',
      dateOfBirth: 'Date of Birth',
      jobTitle: 'Job Title'
    }

    return (
      <DetailsRow
          styles={{cell: {width: '120px!important', display: 'flex', alignItems: 'center', justifyContent: 'center'}}}
          checkboxVisibility={CheckboxVisibility.hidden}
          columns={columns}
          groupNestingDepth={nestingDepth}
          item={columnNames}
          itemIndex={-1}
          group={group}
        />
    )
  }

  const onRenderCell = (nestingDepth?: number, item?: Person, itemIndex?: number, group?: IGroup) => {
    const columns: IColumn[] = [
      { key: 'profilePicture', name: 'Profile Picture', fieldName: 'profilePicture', minWidth: 300, targetWidthProportion: 1, onRender: renderProfilePicture},
      { key: 'id', name: 'Id', fieldName: 'id', minWidth: 600, maxWidth: 600},
      { key: 'userId', name: 'User Id', fieldName: 'userId', minWidth: 300, maxWidth: 300 },
      { key: 'firstName', name: 'User Id', fieldName: 'firstName', minWidth: 600, maxWidth: 300 },
      { key: 'lastName', name: 'User Id', fieldName: 'lastName', minWidth: 300, maxWidth: 300 },
      { key: 'sex', name: 'User Id', fieldName: 'sex', minWidth: 300, maxWidth: 300 },
      { key: 'email', name: 'User Id', fieldName: 'email', minWidth: 300, maxWidth: 300 },
      { key: 'phone', name: 'User Id', fieldName: 'phone', minWidth: 300, maxWidth: 300 },
      { key: 'dateOfBirth', name: 'User Id', fieldName: 'dateOfBirth', minWidth: 300, maxWidth: 300 },
      { key: 'jobTitle', name: 'User Id', fieldName: 'jobTitle', minWidth: 300, maxWidth: 300 },
      { key: "deleteButton", name: "deleteButton", minWidth: 500, maxWidth: 300, onRender: (item: Person) => (<DefaultButton text="Delete" onClick={() => {handleDelete(item?.id)}} style={{ backgroundColor: "red", color: "white"}}/>)}
    ];

    return item && typeof itemIndex === 'number' && itemIndex > -1 ? (
      <div style={{ width: '100%'}}>
        {itemIndex === group?.startIndex ?
          renderHeaderCell(nestingDepth, group, itemIndex)
        : null}
        <DetailsRow
          styles={{cell: {width: '120px!important', display: 'flex', alignItems: 'center', justifyContent: 'center'}}}
          checkboxVisibility={CheckboxVisibility.hidden}
          columns={columns}
          groupNestingDepth={nestingDepth}
          item={item}
          itemIndex={itemIndex}
          group={group}
        />
      </div>
    ) : null;
  }

  const _onTest = (): boolean => {
    return false;
  }

  return (
    <div>
      <div className={styles.container}>
        <h3>PEOPLE</h3>
        <AddPersonModal onAddPerson={handleAddPerson} />
      </div>
      <div className={styles.container}>
        {isLoading ? (<Spinner />) : (<GroupedList 
          items={people} 
          groups={groups} 
          onRenderCell={onRenderCell}
          onShouldVirtualize={_onTest}
          selectionMode={SelectionMode.none}
        />)}
      </div>
    </div>
  )
}

export default PeopleList