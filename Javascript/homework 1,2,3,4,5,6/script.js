function tellStory(storyElements) {
  const [name, mood, activity] = storyElements;
  
  const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
  
  return story;
}

const result = tellStory(["Ilija", "happy", "coding"]);
console.log(result);