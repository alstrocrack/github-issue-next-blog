export interface Node {
  number: number;
  title: string;
  author: {
    login: string;
  };
  bodyHTML: HTMLElement;
  createdAt: string;
  labels: {
    totalCount: number;
    nodes: Label[];
  };
}

export interface Label {
  id: number;
  color: string;
  name: string;
}
