interface ICreateProjectDTO {
  id?: string;
  userId: string,
  ongProblemId: string,
  name: string;
  description: string;
  github: string;

}

export { ICreateProjectDTO }
