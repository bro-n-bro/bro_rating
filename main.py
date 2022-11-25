from utils import processor
from config import NETWORKS
import asyncio
import aiohttp


async def main():
    connector = aiohttp.TCPConnector(limit=100)
    async with aiohttp.ClientSession(connector=connector, trust_env=True) as session:
        tasks = []
        for network in NETWORKS:
            tasks.append(asyncio.ensure_future(processor(session, network)))
        await asyncio.gather(*tasks)


if __name__ == '__main__':
    asyncio.run(main())