
export interface IMovie {
  Title: string;
  Year: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
}

export class Movie implements IMovie {
  public Title: string;
  public Year: string;
  public imdbID?: string;
  public Type?: string;
  public Poster?: string;

  constructor(title: string, year: string) {
    this.Title = title;
    this.Year = year;
  }
}
