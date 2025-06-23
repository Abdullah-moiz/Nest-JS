import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get("/get-users")
    findAllUsers() {
        return "This action returns all users";
    }


    @Get("/get-specific-user/:id")
    findOneUser() {
        return "This action returns a user with a specific id";
    }

    @Get("/add-specific-user/:id/posts")
    findUserPosts() {
        return "This action returns all posts of a user with a specific id";
    }
}
