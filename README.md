rift-docs
=========

Development requires:

* nanoc (`gem install nanoc`)
* guard-nanoc (`gem install guard-nanoc`)
* nanoc-git (`gem install nanoc-git`)

### Local development

From the root directory, start guard-nanoc for auto-recompiling on file change:
```
guard
```

In another terminal, still from the root directory, start the local development server:
```
nanoc view
```

Then open http://localhost:3000 in your favorite browser to see what it looks like.

### Deployment

To deploy the documentation, use nanoc-git:
```
nanoc deploy
```
