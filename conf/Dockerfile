
FROM php:8-fpm

# Install sSMTP for mail support
RUN apt-get update \
	&& apt-get install -y -q --no-install-recommends \
        golang-go \
        vim \

	&& apt-get clean \
	&& rm -r /var/lib/apt/lists/* \
    && go install github.com/mailhog/mhsendmail@latest \
    && ln ~/go/bin/mhsendmail /usr/bin/mhsendmail

