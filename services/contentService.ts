import axios from 'axios';
import { useMainStore } from '../stores/store';

// Helpers
import ContentHelper from '../helpers/contentHelper';

export default class ProductService {
    store: any = useMainStore();

    contentHelper: ContentHelper = new ContentHelper;

    async getPage(slug: string): Promise<any> {
		console.log(slug);
        try {
            const response = await axios.get<any>(`${this.store.apiBaseurl}/blogposts/slug`, {
                params: {
                    slug: slug
                },
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-API-Key': this.store.xApiKey
                }
            });

            if (response.data) {
                var result = this.contentHelper.mapPageModel(response.data)

                return result;
            }

            return response.data;
        } catch (error) {
            throw new Error('Error fetching page: ' + error);
        }
    }

     async getRoutes(): Promise<Array<any>> {
        try {
            const response = await axios.get<Array<any>>(`${this.store.apiBaseurl}/blogposts/routes`, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-API-Key': this.store.xApiKey
                }
            });
			
            if (response.data) {
                var mappedData = this.contentHelper.mapRouteModelList(response.data)

                return mappedData
            }

            return response.data;
        } catch (error) {
            throw new Error('Error fetching routes: ' + error);
        }
    }
}