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
    cover: `${BASE_PATH}/ai-robot-guide/cover.jpg`,
    gallery: []
  },
  treesBot: {
    cover: `${BASE_PATH}/trees4-bot/cover.jpg`,
    gallery: []
  },
  aetoxWeb: {
    cover: `${BASE_PATH}/aetox-foundation/cover.jpg`,
    gallery: []
  }
};

export default projectMedia;
