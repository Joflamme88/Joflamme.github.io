export interface Description {
  title?: string;
  description?: string;
}

export interface ProjetType {
  id: number;
  name: string;
  image: string;
  description: Description[];
  box_title: string;
  box_description: string[];
  link_box: string;
  button?: boolean;
  button_title?: string;
  button_link?: string;
  button_title2?: string;
  button_link2?: string;
}
