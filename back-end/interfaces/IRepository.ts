export interface IRepository<Type> {
  findAll(): Promise<Type[]>;
  findOne(): Promise<Type>;
  create(value: Partial<Type>): Promise<Type>;
  delete(): Promise<boolean>;
  update(): Promise<Type>;
}
