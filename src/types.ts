export type Review = [string, number, string]

export enum Genre {
  Fantasy = 1,
  Adventure,
  Horror
}


type Id = number | string
type WeekDay = 'Mo' | 'Tu' | 'We' | 'Thu' | 'Fr' | 'Sa' | 'Su'
type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6
type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
type Direction = 'back' | 'forward'
type YesNo = boolean | 0 | 1
