FROM ubuntu

ENV http_proxy=http://10.0.102.155:3128
RUN apt-get update && apt-get install apache2 -y

#ADD app/ /var/www/html
COPY app/ /var/www/html

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
