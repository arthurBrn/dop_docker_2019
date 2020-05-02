FROM redis:latest
# Use redif conf file, maybe append some security into all that 
COPY redis.conf /usr/local/etc/redis/redis.conf

# Start the redis server 
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]