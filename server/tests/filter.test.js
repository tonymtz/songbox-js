const typeFilter = require('../tools/typeFilter');

const dropboxFiles = [
      {
        '.tag': 'folder',
        name: 'ME MES',
        path_lower: '/me mes',
        path_display: '/ME MES',
      },
      {
        '.tag': 'file',
        name: 'Backstreet Boys   I Want It That Way (Official Music Video).ogg',
        path_lower: '/backstreet boys   i want it that way (official music video).ogg',
        path_display: '/Backstreet Boys   I Want It That Way (Official Music Video).ogg',
      },
      {
        '.tag': 'file',
        name: 'Charlotte Opening   4K   60FPS   Creditless   Flac.mp3',
        path_lower: '/charlotte opening   4k   60fps   creditless   flac.mp3',
        path_display: '/Charlotte Opening   4K   60FPS   Creditless   Flac.mp3',
      },
      {
        '.tag': 'file',
        name: 'Logic   Overnight (Official Video).mp3',
        path_lower: '/logic   overnight (official video).mp3',
        path_display: '/Logic   Overnight (Official Video).mp3',
      },
];

const otherDropboxFiles = [
    {
        '.tag': 'folder',
        name: 'TRASH',
        path_lower: '/trash',
        path_display: '/TRASH',
    },
    {
        '.tag': 'folder',
        name: 'Maluma',
        path_lower: '/maluma',
        path_display: '/Maluma',
    },

    {
        '.tag': 'file',
        name: 'Lil Wayne, Wiz Khalifa  Imagine Dragons w Logic  Ty Dolla $ign ft X Ambassadors   Sucker for Pain.mp3',
        path_lower: '/lil wayne, wiz khalifa  imagine dragons w logic  ty dolla $ign ft x ambassadors   sucker for pain.mp3',
        path_display: '/Lil Wayne, Wiz Khalifa  Imagine Dragons w Logic  Ty Dolla $ign ft X Ambassadors   Sucker for Pain.mp3',
      },
      {
        '.tag': 'file',
        name: 'Fake Love.mp3',
        path_lower: '/fake love.mp3',
        path_display: '/Fake Love.mp3',
      },
      {
        '.tag': 'file',
        name: 'Logic   Take It Back (Official Video).mp3',
        path_lower: '/logic   take it back (official video).mp3',
        path_display: '/Logic   Take It Back (Official Video).mp3',
      }
];

const dropboxFilesWithBadExtension = [
  {
      '.tag': 'folder',
      name: 'TRASH',
      path_lower: '/trash',
      path_display: '/TRASH',
  },
  {
      '.tag': 'folder',
      name: 'Maluma',
      path_lower: '/maluma',
      path_display: '/Maluma',
  },

  {
      '.tag': 'file',
      name: 'Lil Wayne, Wiz Khalifa  Imagine Dragons w Logic  Ty Dolla $ign ft X Ambassadors   Sucker for Pain.pdf',
      path_lower: '/lil wayne, wiz khalifa  imagine dragons w logic  ty dolla $ign ft x ambassadors   sucker for pain.mp3',
      path_display: '/Lil Wayne, Wiz Khalifa  Imagine Dragons w Logic  Ty Dolla $ign ft X Ambassadors   Sucker for Pain.mp3',
    },
    {
      '.tag': 'file',
      name: 'Fake Love.mp4',
      path_lower: '/fake love.mp3',
      path_display: '/Fake Love.mp3',
    },
    {
      '.tag': 'file',
      name: 'Logic   Take It Back (Official Video).4m3',
      path_lower: '/logic   take it back (official video).mp3',
      path_display: '/Logic   Take It Back (Official Video).mp3',
    }
];

const dropboxFilesWithBadExtensionPart2 = [
  {
      '.tag': 'TRASH',
      name: 'TRASH',
      path_lower: '/trash',
      path_display: '/TRASH',
  },
  {
      '.tag': '',
      name: 'Maluma',
      path_lower: '/maluma',
      path_display: '/Maluma',
  },

  {
      '.tag': 'file',
      name: 'Lil Wayne, Wiz Khalifa  Imagine Dragons w Logic  Ty Dolla $ign ft X Ambassadors   Sucker for Pain.pdf',
      path_lower: '/lil wayne, wiz khalifa  imagine dragons w logic  ty dolla $ign ft x ambassadors   sucker for pain.mp3',
      path_display: '/Lil Wayne, Wiz Khalifa  Imagine Dragons w Logic  Ty Dolla $ign ft X Ambassadors   Sucker for Pain.mp3',
    },
    {
      '.tag': 'file',
      name: 'Fake Love.mp4',
      path_lower: '/fake love.mp3',
      path_display: '/Fake Love.mp3',
    },
    {
      '.tag': 'file',
      name: 'Logic   Take It Back (Official Video).4m3',
      path_lower: '/logic   take it back (official video).mp3',
      path_display: '/Logic   Take It Back (Official Video).mp3',
    }
];

const noFilesAtAll = [];

test('Expect to have 4 files.', () => {
    const files = typeFilter(dropboxFiles);
    expect(files).toHaveLength(4);
});

test('Expect to have 5 files.', () => {
  const files = typeFilter(otherDropboxFiles);
  expect(files).toHaveLength(5);
});

test('Expect to have 2 files.', () => {
  const files = typeFilter(dropboxFilesWithBadExtension);
  expect(files).toHaveLength(2);
});

test('Expect to have 0 files.', () => {
  const files = typeFilter(noFilesAtAll)
  expect(files).toHaveLength(0);
});

test('Expect to have 0 files.', () => {
  const files = typeFilter(dropboxFilesWithBadExtensionPart2)
  expect(files).toHaveLength(0);
});
