import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'; 

// Models
import type RouteModel from '../types/route';
import type BlogPostModel from '~/types/blogPost';
import Quill from 'quill';

export default class ContentHelper {
    mapRouteModelList(data: any): RouteModel[] {
        var result: RouteModel[] = [];

        if (data) {
            data.forEach((item: any) => {
                var resultItem = this.mapRouteModel(item);
                result.push(resultItem);
            });
        }
        return result;
    }

    mapRouteModel(data: any): RouteModel {
        var result = {
            title: data.title,
            slug: data.slug,
        } as RouteModel;

        return result;
    }

    mapPageModel(data: any): BlogPostModel {
        var deserializedContent = JSON.parse(data.contentJson);

        var result = {
            id: data.id,
            title: data.title,
            slug: data.slug,
            content: deserializedContent,
            summary: data.summary,
        } as BlogPostModel;

        return result;
    }

}