import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GitlabProvider from 'next-auth/providers/gitlab'
import AtlassianProvider from 'next-auth/providers/atlassian'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET, 
        }),
        GitlabProvider({
            clientId: process.env.GITLAB_CLIENT_ID,
            clientSecret: process.env.GITLAB_CLIENT_SECRET,
            authorization: {
                url: 'https://gitlab.com/oauth/authorize?client_id=fa2bb6efc4063aff77408c2f6f12f703bae0bc84f4bc0d7d8d2ac9993706072b&redirect_uri=https%3A%2F%2Farbit.cloud%2F&response_type=code&scope=read%5Fuser'
            }
        }),
        AtlassianProvider({
            clientId: process.env.ATLASSIAN_CLIENT_ID,
            clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
            authorization: {
                url: 'https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=oiXLW1e64JPnmDELpkxHOTvSQnxOHwHy&scope=read%3Ame&redirect_uri=https%3A%2F%2Farbit.cloud%2Fhome&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent'
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)