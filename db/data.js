'use strict';
const notes = [
  {
    '_id': '110000000000000000000000',
    'title': '5 life lessons learned from cats',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'userId' : '410000000000000000000000',
    'folderId': '210000000000000000000000',
    'tags': ['310000000000000000000000']
  },
  {
    '_id': '120000000000000000000000',
    'title': 'What the government doesn\'t want you to know about cats',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'userId' : '420000000000000000000000',
    'folderId': '220000000000000000000000',
    'tags': ['320000000000000000000000']
  },
  {
    '_id': '130000000000000000000000',
    'title': 'The most boring article about cats you\'ll ever read',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'userId' : '410000000000000000000000',
    'folderId': '210000000000000000000000',
    'tags': ['310000000000000000000000', '330000000000000000000000']
  },
  {
    '_id': '140000000000000000000000',
    'title': '7 things Lady Gaga has in common with cats',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'userId' : '420000000000000000000000',
    'folderId': '220000000000000000000000'
  },
  {
    '_id': '150000000000000000000000',
    'title': 'The most incredible article about cats you\'ll ever read',
    'content': 'Lorem ipsum dolor sit amet, boring consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'userId' : '410000000000000000000000',
    'folderId': '210000000000000000000000',
    'tags': ['330000000000000000000000']
  },
  {
    '_id': '160000000000000000000000',
    'title': '10 ways cats can help you live to 100',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'userId' : '420000000000000000000000',
    'folderId': '240000000000000000000000',
    'tags': ['320000000000000000000000', '340000000000000000000000']
  },
  {
    '_id': '170000000000000000000000',
    'title': '9 reasons you can blame the recession on cats',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'userId' : '410000000000000000000000',
    'folderId': '230000000000000000000000',
    'tags': ['330000000000000000000000']
  },
  {
    '_id': '180000000000000000000000',
    'title': '10 ways marketers are making you addicted to cats',
    'userId' : '420000000000000000000000',
    'content': 'Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.',
    'folderId': '240000000000000000000000'
  }
];

const folders = [
  {
    '_id': '210000000000000000000000',
    'userId' : '420000000000000000000000',
    'name': 'Archive'
  },
  {
    '_id': '220000000000000000000000',
    'userId' : '420000000000000000000000',
    'name': 'Drafts'
  },
  {
    '_id': '230000000000000000000000',
    'userId' : '410000000000000000000000',
    'name': 'Personal'
  },
  {
    '_id': '240000000000000000000000',
    'userId' : '410000000000000000000000',
    'name': 'Work'
  }
];

const tags = [
  {
    '_id': '310000000000000000000000',
    'userId' : '420000000000000000000000',
    'name': 'breed'
  },
  {
    '_id': '320000000000000000000000',
    'userId' : '420000000000000000000000',
    'name': 'hybrid'
  },
  {
    '_id': '330000000000000000000000',
    'userId' : '410000000000000000000000',
    'name': 'domestic'
  },
  {
    '_id': '340000000000000000000000',
    'userId' : '410000000000000000000000',
    'name': 'feral'
  }
];

const users = [
  {
    '_id' : '410000000000000000000000',
    'username' : 'hashuser',
    'password' : '$2a$10$S8CqcZ8jreTIitLtK/DVpOY/EX1u6ezoMlM1yOz5.6z0im464iclG',
    //hashpassword
    'fullName' : 'Hash User',
  },
  {
    '_id' : '420000000000000000000000',
    'username' : 'testuser',
    'password' : '$2a$10$kQVzPZoApe1tRKp90bSAc.fE6TPIzk4igyTv/n4Gi0L5sdXDdSLQW',
    //testpassword
    'fullName' : 'Test User',
  }
];

module.exports = { folders, notes, tags, users };