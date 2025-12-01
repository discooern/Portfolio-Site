// Models
import type RouteModel from '../types/route';

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
}