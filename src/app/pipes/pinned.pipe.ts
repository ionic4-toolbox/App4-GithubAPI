import { UserDataService } from './../user-data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { GithubRepo } from '../user-data.service';

@Pipe({
  name: 'pinned'
})
export class PinnedPipe implements PipeTransform {

  constructor(public user: UserDataService) {

  }

  transform(repos: GithubRepo[]): any {
    if (!this.user.config.pinnedProjects) {
      return repos;
    }
    return repos.filter(repo => !this.user.config.pinnedProjects.find(rep => rep.startsWith(repo.html_url)));
  }

}
