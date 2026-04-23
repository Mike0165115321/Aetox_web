/**
 * Project Media Central
 * ใช้สำหรับจัดการ Path รูปภาพของทุกโปรเจกต์แยกตาม Folder
 */

const BASE_PATH = '/projects';

export const projectMedia = {
  bookmind: {
    cover: `${BASE_PATH}/bookmind/cover.jpg`,
    gallery: [
      `${BASE_PATH}/bookmind/dashboard.jpg`,
      `${BASE_PATH}/bookmind/ai-chat.jpg`,
    ]
  },
  robotGuide: {
    cover: `${BASE_PATH}/robot-guide/cover.jpg`,
    gallery: []
  },
  treesBot: {
    cover: `${BASE_PATH}/trees-bot/cover.jpg`,
    gallery: []
  },
  aetoxWeb: {
    cover: `${BASE_PATH}/aetox-web/cover.jpg`,
    gallery: []
  }
};

export default projectMedia;
