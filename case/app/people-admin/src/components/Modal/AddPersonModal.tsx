import { useId, useBoolean } from '@fluentui/react-hooks';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  Stack,
  IStackStyles,
  IStackProps,
} from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { SubmitHandler } from 'react-hook-form';
import Form from '../Form/AddPersonForm';

interface AddPersonModalProps {
  onAddPerson: () => void;
};

const AddPersonModal = ({ onAddPerson } : AddPersonModalProps ) => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

  const titleId = useId('add-person');

  const stackTokens = { childrenGap: 8 };

  const stackStyles: Partial<IStackStyles> = { root: { width: '80vw' } };

  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { minWidth: 150, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' } },
  };

  const _onAddPerson = () => {
    onAddPerson();
    hideModal();
  }

  const iconProps = { iconName: 'add' };

  return (
    <div>
      <DefaultButton onClick={showModal} text="Add Person" iconProps={iconProps}/>
      <Modal
        titleAriaId={titleId}
        isOpen={isModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={contentStyles.container}
      >
        <Stack tokens={stackTokens} styles={stackStyles}>
          <Stack>
            <h1>Add a new person</h1>
            <p>It is a form that you can record new person information. You should fill all the necessary information!</p>
          </Stack>
          <Stack {...columnProps}>
            <Form onAddPerson={_onAddPerson}/>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    padding: '24px'
  },
  header: [
    // eslint-disable-next-line deprecation/deprecation
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  heading: {
    color: theme.palette.neutralPrimary,
    fontWeight: FontWeights.semibold,
    fontSize: 'inherit',
    margin: '0',
  },
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});

export default AddPersonModal;