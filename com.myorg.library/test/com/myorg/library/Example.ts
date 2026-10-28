import { ExampleColor } from 'com/myorg/library/library';
import Example from 'com/myorg/library/Example';

// Create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
  text: 'Example',
  color: ExampleColor.Highlight,
}).placeAt('content');
