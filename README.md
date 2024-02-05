## Features so far..
- [ ] Time tracking by Activity
- [ ] Clients
- [ ] Projects
- [x] Authentication

### Data model so far
![Alt text](image.png)


## Todo:
Inside the page.tsx, of app directory, I want to show Hello if the user in SignedOut and Hello, {username} if user is signed in.
Now looking at SignedIn content, user doesn't neccessarily has a username when they sign up, as they are signing up using google, so we check first if the user object has a user name if not then we say, Hey what should we call you, update the user object's username on button click and then reload the suer object, so that user sees `Hello, {username}`.
I can't find how to update user, clerkClient.users is undefined, hence updateUser is not working, the `useUser` hook is also giving errors.

migrating command: npx prisma migrate dev --name added_username_column