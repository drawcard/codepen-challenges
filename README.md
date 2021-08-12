# codepen-challenges
Where I do my codepen challenge stuff

If you're checking this out, make sure you run `npm i` in each subdirectory to fetch any dependencies required. Then run `npm start` to launch a server & view the challenge.

## Troubleshooting
### 404 error after running `npm start` and going to `localhost:1234`
This can happen if you are switching between directories, and running `npm start` without allowing Parcel enough time to flush it's older build caches.
- Try running `npm i` in the directory first
- Hit Ctrl-C to kill the build process and re-run it
