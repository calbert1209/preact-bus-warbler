# preact-bus-warbler

When will the next bus come? 🚌

## What

`preact-bus-warber` is my [Bus Warbler](https://github.com/calbert1209/bus-warbler) app, re-written using [Vite](https://vitejs.dev/) and [Preact](https://preactjs.com/) to explore these new tools. Sadly there isn't much to learn, as Vite is super simple to use, and the authors of Preact have worked hard to make it very close to a drop-in replacement for React! 🤩

## Why

You finally get yourself and the family ready for an outing and start walking with the kiddos to the bus stop. The roads in a Japanese suburb don't have walk ways, so everyone's walking in the street. If your kids are small, you'd better hold their hand. You start to wonder. When will the next bus arrive? Should you encourage them to walk fast so you can make the next bus, or is there heaps of time, because you just missed the next bus. Sure, you could check Google Maps or Yahoo Transit, etc. but that is a lot of work for your only free thumb while you are also walking in the road with kids.

Bus Warbler offers the information your family (well, okay, only my family so far) needs with minimal thumb-work - two taps. Just (1) launch the site, and (2) select the route you'll use. 

## How

### Frontend

The frontend in this repo is built using
- [Vite](https://vitejs.dev/)
- [Preact](https://preactjs.com/)
- Typescript

and served as humble GitHub Pages
...cuz it's _free_ like a mother's love! 🤱

### Backend

Data is scraped from the Kanagawa Chuo （Kanachu) Bus company website. (An example source page can be found [here](https://www.kanachu.co.jp/dia/diagram/send?cs=0000800324-1&nid=00126855&chk=all&dts=1641578400).) 

**Why not just use a free transit route API like Google Maps?**

I would if I could, but unlike most other countries on the globe, Google Maps API doesn't provide public transit routing information in Japan. Other APIs exist, but are not free. >_<

Currently the data is scraped and collated as JSON via [a GitHub action](https://github.com/calbert1209/json-api/blob/main/.github/workflows/fetch-and-deploy.yml) that run when commits are pushed. It could be a cron job, as GitHub actions supports [scheduled invocations of workflows](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#scheduled-events) too! Why not spin up a server in the cloud? That's possible too, but GitHub actions are _free_ like starry skies 🌌 and rainbows! 🌈

The same JSON data is served via good ol' GitHub pages from this [repo](https://github.com/calbert1209/json-api) 
... cuz it's _free_ like a summer breeze! 🍃

(Did you notice the theme?)

## Origin of name

I like to name my projects after birds. This one is a play on the name "bush warbler". There is a thicket of bamboo behind the bus stop I use most often, and in the summer [Japanese bush warblers](https://en.wikipedia.org/wiki/Japanese_bush_warbler) often sing their distinctive song from the bamboo.
