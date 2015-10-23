var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 32,
    header: 'Learn React',
    description: 'React is fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  }, {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speedup your environment workflow',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.target'));
