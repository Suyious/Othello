import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const timestamp = new Date(value).getTime();
    const now = new Date().getTime();
    const difference = now - timestamp;
    if (difference < 1000) {
      return 'just now';
    } else if (difference < 60 * 1000) {
      const seconds = Math.floor(difference / 1000);
      return `${seconds}s`;
    } else if (difference < 60 * 60 * 1000) {
      const minutes = Math.floor(difference / (60 * 1000));
      return `${minutes}m`;
    } else if (difference < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(difference / (60 * 60 * 1000));
      return `${hours}h`;
    } else if (difference < 7 * 24 * 60 * 60 * 1000) {
      const days = Math.floor(difference / (24 * 60 * 60 * 1000));
      return `${days}d`;
    } else if (difference < 365 * 24 * 60 * 60 * 1000) {
      const weeks = Math.floor(difference / (7 * 24 * 60 * 60 * 1000));
      return `${weeks}w`;
    } else {
      const years = Math.floor(difference / (365 * 24 * 60 * 60 * 1000));
      return `${years}y`;
    }
  }

}
