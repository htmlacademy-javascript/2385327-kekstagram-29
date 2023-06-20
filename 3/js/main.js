

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const messageText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: getRandomInteger(0, 100),
  avatar: `img/${getRandomInteger(0, 6)}.svg`,
  message: getRandomArrayElement(messageText),
  name: getRandomArrayElement(NAMES),
});

const createObj = () => ({
  id: getRandomInteger(0, 25),
  url: `photos/${getRandomInteger(0, 25)}.jpg`,
  description: getRandomInteger(0, messageText.length - 1),
  likes: getRandomInteger(15, 200),
  comments:[Array.from(length: getRandomInteger(0, 30)), createComments],
});
createObj();

const similarObj = Array.from({length: 25}, createObj);
