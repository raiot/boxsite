import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const NewsItemType = new ObjectType({
  name: 'NewsItem',
  fields: {
    title: { type: new NonNull(StringType) },
    img: { type: StringType },
    author: { type: StringType },
    created: { type: new NonNull(StringType) },
    contentSnippet: { type: StringType },
  },
});

export default NewsItemType;
