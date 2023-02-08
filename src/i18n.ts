import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      userProfile: "User Profile",
      firstName: "First Name",
      lastName: "Last Name",
      dragDrop: "Drag & Drop your file here",
      uploadPhoto: "Upload Photo",
      email: "Email",
      save: "Save",
    },
  },
  ar: {
    message: {
      userProfile: "ملف تعريفي للمستخدم",
      firstName: "الاسم الاول",
      lastName: "الكنية",
      dragDrop: "اسحب الملف وأفلته هنا",
      uploadPhoto: "حمل الصورة",
      email: "بريد إلكتروني",
      save: "يحفظ",
    },
  },
};

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: messages,
});
