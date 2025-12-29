export default defineEventHandler((event:any) => {
    const config = useRuntimeConfig()

    function getSubdomain(hostname: string) {
        const defaultCity = "city1";
        const parts = hostname.split('.');
        if(hostname.search("localhost") >= 0){
            return parts.length > 1 ? parts[0] : defaultCity;
        }
        return parts.length > 2 ? parts[0] : defaultCity;
    }
    event.context.city = config.public.city || getSubdomain(event.node.req.headers.host);
})