import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from 'src/app/services/session-manager.service';
import { IUser } from 'src/app/interfaces/iuser';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/ipost';
import { PostManagerService } from 'src/app/services/post-manager.service';
import { UserManagerService } from 'src/app/services/user-manager.service';
import { StoryMangerService } from 'src/app/services/story-manger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user;
  stories: Array<any> = [];
  storiesAlreadySeen: Array<any> = [];
  constructor(
    private sessionManager: SessionManagerService,
    private router: Router,
    userManager: UserManagerService,
    storyManager: StoryMangerService
  ) {
    this.user = sessionManager.getUser();
    if (this.user instanceof Array) {
      this.router.navigateByUrl('/login');
    } else {
      this.storiesAlreadySeen = storyManager.getStoriesSeenByUser(this.user.id);
      if (this.storiesAlreadySeen.length === 0) {
        this.stories = storyManager.getStoriesDistinctUsers();
      } else {
        let aviableStories = storyManager
          .getStories()
          .filter((x) => !storyManager.alreadySeen(x.id, this.user.id));
        this.stories = storyManager.getStoriesDistinctUsers(aviableStories);
        this.storiesAlreadySeen = storyManager
          .getStoriesDistinctUsers(this.storiesAlreadySeen)
          .filter((x) => !this.stories.includes(x));
      }

      storyManager.setAviableStories([
        ...this.stories,
        ...this.storiesAlreadySeen,
      ]);
      this.stories = this.stories.map((x) => {
        return { user: userManager.getUserFromId(x) };
      });
      this.storiesAlreadySeen = this.storiesAlreadySeen.map((x) => {
        return { user: userManager.getUserFromId(x) };
      });
    }
  }

  ngOnInit(): void {}
}
