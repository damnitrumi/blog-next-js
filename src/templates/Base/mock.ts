import { BaseTemplateProps } from ".";
import { data } from "../../api/dados.json";

const { id: settingId, attributes: settingAttributes } = data.setting.data;

const { blogName, blogDescription, logo, menuLink, text } = settingAttributes;

const { id: logoId, attributes: logoAttributes } = logo.data;

const { alternativeText, url } = logoAttributes;

export default {
  settings: {
    id: settingId,
    blogName: blogName,
    blogDescription: blogDescription,
    logo: {
      id: logoId,
      alternativeText,
      url,
    },
    menuLink: menuLink,
    text: text,
  },
  children: "Olá Mundo",
} as BaseTemplateProps;
