
export interface IMovie {
  Title: string;
  Year: string;
  Type?: string;
  Poster: string;
  Comment?: string;
}

export class Movie implements IMovie {
  public Title: string;
  public Year: string;
  public Type?: string;
  public Poster: string;
  public Comment?: string;

  constructor(title: string, year: string, poster: string, comment?: string) {
    this.Title = title;
    this.Year = year;
    this.Poster = 'https://image.tmdb.org/t/p/w500' + poster;
    this.Comment = comment;
  }
}
