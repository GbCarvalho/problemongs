interface ICreateProjectDTO {
  id?: string;
  usersId: string[];
  ongProblemId: string;
  name: string;
  description: string;
  github: string;
}

export { ICreateProjectDTO };
