import config from '../config.json';

export interface ArticleSummary {
    title: string
    brief: string
    slug: string
    totalReactions: number
    dateAdded: Date
    coverImage: string
}

interface HashnodeResponse {
    data: {
        user: {
            publication: {
                posts: ArticleSummary[]
            }
        }
    }
}

export class HashnodeClient {

    public async fetchBlogPosts(maxNumber?: number): Promise<ArticleSummary[]> {
        let allBlogsFetched = false;
        let articles: ArticleSummary[] = [];
        let page = 0;
        const query = `
        query GetUserArticles($page: Int!) {
            user(username: "katycodesstuff") {
                publication {
                    posts(page: $page) {
                        title
                        brief
                        slug
                        totalReactions
                        dateAdded
                        coverImage
                    }
                }
            }
        }`;
        while (!allBlogsFetched) {
            if (maxNumber && articles.length >= maxNumber) {
                break;
            }
            let response: HashnodeResponse = await this.makeGqlRequest(query, { page: page });
            articles.push(...response.data.user.publication.posts);
            if (response.data.user.publication.posts.length === 0) {
                allBlogsFetched = true;
            }
            page++;
        }
        if (maxNumber) {
            return articles
            .slice(0, maxNumber)
        }
        return articles;
    }

    private async makeGqlRequest(query: string, variables = {}): Promise<any> {
        const data = await fetch(config.HASHNODE_API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
    
        return data.json();
    }
}