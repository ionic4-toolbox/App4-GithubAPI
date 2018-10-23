import { Pipe, PipeTransform } from '@angular/core';
import { GithubRepo } from '../user-data.service';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(repos: GithubRepo[], loginName: string): any {
    if (!loginName) {
      return repos;
    }

    return repos.filter(repo => repo.full_name.startsWith(loginName));
  }

}
