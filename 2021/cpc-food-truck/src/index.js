import Splitting from 'splitting';

Splitting().forEach( s => {

  s.chars.forEach( char => {
    char.style.setProperty('--random', Math.random());
  });

});
