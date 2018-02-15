## Welcome ##

# BlkProverbs App 📺
Made with a Ruby on Rails backend and React/Redux frontend. Users can randomly generate a proverb and tweet their favorites to their friends.

## Installation ##

```shell
git clone https://github.com/curlsandcode/blkproverbs-app.git
cd blkproverbs-app
bundle install
sudo service postgresql start
rails db:create
rails db:migrate
rails db:seed
cd blkproverbs-app-client
npm install
```

Then `rake start` to start both servers.

## License ##

The app is available as open source under the terms of the [MIT License](https://github.com/curlsandcode/blkproverbs-app/blob/master/LICENSE).