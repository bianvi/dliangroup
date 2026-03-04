export interface Project {
  id: number | string;
  title: string;
  client: string;
  category: string;
  image: string;
  year: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  results: {
    label: string;
    value: string;
  }[];
  technologies: string[];
}
