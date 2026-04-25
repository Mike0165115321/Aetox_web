/**
 * Project Media Central
 * ใช้สำหรับจัดการ Path รูปภาพของทุกโปรเจกต์แยกตาม Folder
 */

const BASE_PATH = '/projects';

export const projectMedia = {
  bookmind: {
    cover: `${BASE_PATH}/bookmind/cover.png`,
    gallery: [
      `${BASE_PATH}/bookmind/dashboard.png`,
      `${BASE_PATH}/bookmind/ai-chat.png`,
    ]
  },
  robotGuide: {
    cover: `${BASE_PATH}/ai-robot-guide/cover.png`,
    gallery: []
  },
  treesBot: {
    cover: `${BASE_PATH}/trees4-bot/cover.png`,
    gallery: []
  },
  aetoxWeb: {
    cover: `${BASE_PATH}/aetox-foundation/cover.png`,
    gallery: []
  }
};

export default projectMedia;
