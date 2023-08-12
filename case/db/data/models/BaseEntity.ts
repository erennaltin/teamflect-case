class BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt?: Date ;
    deletedAt?: Date;
    isDeleted: boolean;

    constructor() {
        this.createdAt = new Date();
        this.isDeleted = false;
    };
}