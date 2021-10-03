export const getFilteredVideos = (videosArr, searchTerm) => {
  if (!videosArr) return [];

  return videosArr.filter(video => {
    const title = video.title.toLowerCase(),
      // description = video.description.toLowerCase(),
      category = video.category.toLowerCase(),
      speakerName = video.speakerName.toLowerCase(),
      videoLanguage = video.videoLanguage.toLowerCase(),
      additionalInfo = video.additionalInfo.toLowerCase(),
      tags = video.tags;

    const text =
      title +
      ' ' +
      // description +
      // ' ' +
      category.split('-').toString() +
      ' ' +
      speakerName.split('-').toString() +
      ' ' +
      tags.toString() +
      ' ' +
      videoLanguage +
      ' ' +
      additionalInfo;

    return text.includes(searchTerm);
  });
};

/*
const matchWords = (subject, words) => {
  var regexMetachars = /[(){[*+?.\\^$|]/g;

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].replace(regexMetachars, '\\$&');
  }

  var regex = new RegExp('\\b(?:' + words.join('|') + ')\\b', 'gi');
  console.log({ regex });

  return subject.match(regex) || [];
};
console.log(matchWords('One times two plus one equals three.', ['one', 'two']));
// Returns an array with four matches: ["One","two","one"]
*/
