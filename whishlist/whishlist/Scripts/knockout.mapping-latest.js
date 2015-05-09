


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>knockout.mapping/knockout.mapping-latest.js at master · SteveSanderson/knockout.mapping</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="SteveSanderson/knockout.mapping" name="twitter:title" /><meta content="knockout.mapping - Object mapping plugin for KnockoutJS" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/161375?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/161375?v=3&amp;s=400" property="og:image" /><meta content="SteveSanderson/knockout.mapping" property="og:title" /><meta content="https://github.com/SteveSanderson/knockout.mapping" property="og:url" /><meta content="knockout.mapping - Object mapping plugin for KnockoutJS" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTIyNjI1MzI6NGY2ODcyNjEwOWY2OGZkMzBkOGNlZDU3NmMyNTI4MzY6OTcxYWZhYjQyMGNiYmMxMzU0ZjFjM2E0YjRkMDUxZTg2ZjFkYTE0M2Y3OWQ1YmZjZWViNWI1OTY1MDJmYzg5MQ==--79f7d56954daf21f3bc9da076a48038000d7cdc3">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BE012FDE:73ED:16813D03:554E59FA" name="octolytics-dimension-request_id" /><meta content="12262532" name="octolytics-actor-id" /><meta content="nerimartinez" name="octolytics-actor-login" /><meta content="4db2c20602e901df4524e5ed5e998fb3c04c9fe2f5eeb06f6010eb34aebfe95c" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="nerimartinez">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="0vJDxEKmcWYSBEnD3DLKhSFdTZOraGrN/p7TrEw7/yxFm42q24IiwvwkeC+muU5FDCSQxI0touM+wa/ANSWNYw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-c486157afcc5f58155a921bc675afb08733fbaa8dcf39ac2104d381dd9c82ac2.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-da2e842cc3f0aaf33b727d0ef034243c12ab008fd09b24868b97719683b40ee7.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="4426702614c8182f33d1780ad1169662">

      
  <meta name="description" content="knockout.mapping - Object mapping plugin for KnockoutJS">
  <meta name="go-import" content="github.com/SteveSanderson/knockout.mapping git https://github.com/SteveSanderson/knockout.mapping.git">

  <meta content="161375" name="octolytics-dimension-user_id" /><meta content="SteveSanderson" name="octolytics-dimension-user_login" /><meta content="1041356" name="octolytics-dimension-repository_id" /><meta content="SteveSanderson/knockout.mapping" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1041356" name="octolytics-dimension-repository_network_root_id" /><meta content="SteveSanderson/knockout.mapping" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/SteveSanderson/knockout.mapping/commits/master.atom" rel="alternate" title="Recent Commits to knockout.mapping:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/SteveSanderson/knockout.mapping/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/nerimartinez" data-ga-click="Header, go to profile, text:username">
      <img alt="@nerimartinez" class="avatar" data-user="12262532" height="20" src="https://avatars2.githubusercontent.com/u/12262532?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">nerimartinez</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="SteveSanderson/knockout.mapping">This repository</span>
  </li>
    <li>
      <a href="/SteveSanderson/knockout.mapping/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:nerimartinez"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6jqO4VNLWzc1GCVxd2FYmmjvz/GJ+A84iUbuoQAYaUqZYV1HXmQ2w7c7Mh+En/BT1I0xfy9Dot6T+ZHvdDXfJA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        
<div class="flash-global js-notice flash-warn">
<div class="container">
    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
Email verification helps our support team verify ownership if you lose account access and allows you to receive all the notifications you ask for.
    </p>

















</div>
</div>


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ytq7YRVzdVYhJ5Lv7jXkw+6Ckm5sRYI2eD+3oivcmIRRTsXgENZpV3my3quVTZw4yIu8SkgwugMxdlTxGdUADQ==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="1041356" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/SteveSanderson/knockout.mapping/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/SteveSanderson/knockout.mapping/watchers">
          70
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="TZyKNUe0rGIL3Lih3mdIbuOfs9U1AnhkmZ3disYplDkRT2FyI6CcxIFcP3gW3fvgE3l4/Ty9yxrONmW4V8o7NQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar SteveSanderson/knockout.mapping"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/SteveSanderson/knockout.mapping/stargazers">
          475
        </a>
</form>
    <form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZY+Dpd0IWN8hbXJ2AgqpgiAoSzJVdQNAQVBbZEyTUh/DR3EDvKBE/d3OjAmMuSWrDhXxLIw9BQDsODQ50wjpbw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star SteveSanderson/knockout.mapping"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/SteveSanderson/knockout.mapping/stargazers">
          475
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VTvu4DKsg+hijdmPbvVlSJlzDenzZ6+m/BzLkNR1YVouXGickSaOZoKKbfpBG6/mLZYXMjjee89KQgXb3cZDqA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of SteveSanderson/knockout.mapping to your account"
                aria-label="Fork your own copy of SteveSanderson/knockout.mapping to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/SteveSanderson/knockout.mapping/network" class="social-count">647</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/SteveSanderson" class="url fn" itemprop="url" rel="author"><span itemprop="title">SteveSanderson</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/SteveSanderson/knockout.mapping" class="js-current-repository" data-pjax="#js-repo-pjax-container">knockout.mapping</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/SteveSanderson/knockout.mapping/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/SteveSanderson/knockout.mapping" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /SteveSanderson/knockout.mapping">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/SteveSanderson/knockout.mapping/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /SteveSanderson/knockout.mapping/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/SteveSanderson/knockout.mapping/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /SteveSanderson/knockout.mapping/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/SteveSanderson/knockout.mapping/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /SteveSanderson/knockout.mapping/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/SteveSanderson/knockout.mapping/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /SteveSanderson/knockout.mapping/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/SteveSanderson/knockout.mapping/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /SteveSanderson/knockout.mapping/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/SteveSanderson/knockout.mapping.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:SteveSanderson/knockout.mapping.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/SteveSanderson/knockout.mapping" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/SteveSanderson/knockout.mapping" class="btn btn-sm sidebar-button" title="Save SteveSanderson/knockout.mapping to your computer and use it in GitHub Desktop." aria-label="Save SteveSanderson/knockout.mapping to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/SteveSanderson/knockout.mapping/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of SteveSanderson/knockout.mapping as a zip file"
                   title="Download the contents of SteveSanderson/knockout.mapping as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/SteveSanderson/knockout.mapping/blob/92f2649c61bdad2da3406811518f80387a1f6b57/build/output/knockout.mapping-latest.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:1b390fb35fa2423c9f79c241fb2e685e -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/SteveSanderson/knockout.mapping/blob/arrayperf/build/output/knockout.mapping-latest.js"
               data-name="arrayperf"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="arrayperf">
                arrayperf
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/SteveSanderson/knockout.mapping/blob/master/build/output/knockout.mapping-latest.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/SteveSanderson/knockout.mapping/blob/revert/build/output/knockout.mapping-latest.js"
               data-name="revert"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="revert">
                revert
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/2.4.1/build/output/knockout.mapping-latest.js"
                 data-name="2.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.1">2.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/2.4.0/build/output/knockout.mapping-latest.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/2.3.5/build/output/knockout.mapping-latest.js"
                 data-name="2.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.5">2.3.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/2.0.1/build/output/knockout.mapping-latest.js"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/2.0/build/output/knockout.mapping-latest.js"
                 data-name="2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0">2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.2.5/build/output/knockout.mapping-latest.js"
                 data-name="1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.5">1.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.2.4/build/output/knockout.mapping-latest.js"
                 data-name="1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.4">1.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.2.3/build/output/knockout.mapping-latest.js"
                 data-name="1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.3">1.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.2.2/build/output/knockout.mapping-latest.js"
                 data-name="1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.2">1.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.2.1/build/output/knockout.mapping-latest.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.2/build/output/knockout.mapping-latest.js"
                 data-name="1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2">1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/1.0/build/output/knockout.mapping-latest.js"
                 data-name="1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0">1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/SteveSanderson/knockout.mapping/tree/0.5/build/output/knockout.mapping-latest.js"
                 data-name="0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5">0.5</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/SteveSanderson/knockout.mapping/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/SteveSanderson/knockout.mapping" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">knockout.mapping</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/SteveSanderson/knockout.mapping/tree/master/build" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">build</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/SteveSanderson/knockout.mapping/tree/master/build/output" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">output</span></a></span><span class="separator">/</span><strong class="final-path">knockout.mapping-latest.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Roy Jacobs" class="avatar" data-user="173822" height="24" src="https://avatars2.githubusercontent.com/u/173822?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/RoyJacobs" rel="contributor">RoyJacobs</a></span>
        <time datetime="2013-02-08T14:18:25Z" is="relative-time">Feb 8, 2013</time>
        <div class="commit-title">
            <a href="/SteveSanderson/knockout.mapping/commit/35482d03ee7520b1afe0b437a6e66150369378a7" class="message" data-pjax="true" title="Bumped version to 2.4.1 and rebuilt">Bumped version to 2.4.1 and rebuilt</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="RoyJacobs" href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js?author=RoyJacobs"><img alt="Roy Jacobs" class="avatar" data-user="173822" height="20" src="https://avatars0.githubusercontent.com/u/173822?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="SteveSanderson" href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js?author=SteveSanderson"><img alt="Steven Sanderson" class="avatar" data-user="161375" height="20" src="https://avatars0.githubusercontent.com/u/161375?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jpc" href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js?author=jpc"><img alt="Jakub Piotr Cłapa" class="avatar" data-user="107984" height="20" src="https://avatars2.githubusercontent.com/u/107984?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Roy Jacobs" data-user="173822" height="24" src="https://avatars2.githubusercontent.com/u/173822?v=3&amp;s=48" width="24" />
            <a href="/RoyJacobs">RoyJacobs</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Steven Sanderson" data-user="161375" height="24" src="https://avatars2.githubusercontent.com/u/161375?v=3&amp;s=48" width="24" />
            <a href="/SteveSanderson">SteveSanderson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jakub Piotr Cłapa" data-user="107984" height="24" src="https://avatars0.githubusercontent.com/u/107984?v=3&amp;s=48" width="24" />
            <a href="/jpc">jpc</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/SteveSanderson/knockout.mapping/raw/master/build/output/knockout.mapping-latest.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/SteveSanderson/knockout.mapping/blame/master/build/output/knockout.mapping-latest.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/SteveSanderson/knockout.mapping?branch=master&amp;filepath=build%2Foutput%2Fknockout.mapping-latest.js"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/edit/master/build/output/knockout.mapping-latest.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RNT+m9DKvPGfPr+JNzus+I+nM5tz4JEAEQQessqU0TB/SUeBQiA2EBZswlepCDjG+7Y17evv6RSI3Vp8ODYMfg==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/delete/master/build/output/knockout.mapping-latest.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nS6vV+LI1xkq5iLRZuL5MWQkHxWW8rCa7f7RGcTHHabPIlhiXjM+ONIw5avJo3bwq2jZmulJIpK14QADfaYX0g==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        23 lines (22 sloc)
        <span class="file-info-divider"></span>
      9.524 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/// Knockout Mapping plugin v2.4.1</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/// License: MIT (http://www.opensource.org/licenses/mit-license.php)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> <span class="pl-c1">require</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> <span class="pl-c1">exports</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> <span class="pl-c1">module</span><span class="pl-k">?</span>e(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>knockout<span class="pl-pds">&quot;</span></span>),<span class="pl-c1">exports</span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> define<span class="pl-k">&amp;&amp;</span>define.amd<span class="pl-k">?</span>define([<span class="pl-s"><span class="pl-pds">&quot;</span>knockout<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>exports<span class="pl-pds">&quot;</span></span>],e)<span class="pl-k">:</span>e(ko,ko.mapping<span class="pl-k">=</span>{})})(<span class="pl-k">function</span>(<span class="pl-smi">e</span>,<span class="pl-smi">f</span>){<span class="pl-k">function</span> <span class="pl-en">y</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> a,d;<span class="pl-k">for</span>(d <span class="pl-k">in</span> c)<span class="pl-k">if</span>(c.hasOwnProperty(d)<span class="pl-k">&amp;&amp;</span>c[d])<span class="pl-k">if</span>(a<span class="pl-k">=</span>f.getType(b[d]),d<span class="pl-k">&amp;&amp;</span>b[d]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>a)y(b[d],c[d]);<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(b[d])<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(c[d])){a<span class="pl-k">=</span>b;<span class="pl-k">for</span>(<span class="pl-k">var</span> e<span class="pl-k">=</span>d,l<span class="pl-k">=</span>b[d],n<span class="pl-k">=</span>c[d],t<span class="pl-k">=</span>{},g<span class="pl-k">=</span>l.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>g;<span class="pl-k">--</span>g)t[l[g]]<span class="pl-k">=</span>l[g];<span class="pl-k">for</span>(g<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">n.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>g;<span class="pl-k">--</span>g)t[n[g]]<span class="pl-k">=</span>n[g];l<span class="pl-k">=</span>[];n<span class="pl-k">=void</span> <span class="pl-c1">0</span>;<span class="pl-k">for</span>(n <span class="pl-k">in</span> t)l.<span class="pl-c1">push</span>(t[n]);a[e]<span class="pl-k">=</span>l}<span class="pl-k">else</span> b[d]<span class="pl-k">=</span>c[d]}<span class="pl-k">function</span> <span class="pl-en">E</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span>{};y(a,b);y(a,c);<span class="pl-k">return</span> a}<span class="pl-k">function</span> <span class="pl-en">z</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span>E({},b),e<span class="pl-k">=</span>L.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>e;e<span class="pl-k">--</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span>L[e];a[f]<span class="pl-k">&amp;&amp;</span>(a[<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>]<span class="pl-k">instanceof</span> <span class="pl-c1">Object</span><span class="pl-k">||</span>(a[<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span>{}),a[<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>][f]<span class="pl-k">=</span>a[f],<span class="pl-k">delete</span> a[f])}c<span class="pl-k">&amp;&amp;</span>(a.ignore<span class="pl-k">=</span>h(c.ignore,a.ignore),a.include<span class="pl-k">=</span>h(c.include,a.include),a.copy<span class="pl-k">=</span>h(c.copy,a.copy),a.observe<span class="pl-k">=</span>h(c.observe,a.observe));a.ignore<span class="pl-k">=</span>h(a.ignore,j.ignore);a.include<span class="pl-k">=</span>h(a.include,j.include);a.copy<span class="pl-k">=</span>h(a.copy,j.copy);a.observe<span class="pl-k">=</span>h(a.observe,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">j.observe);a.mappedProperties<span class="pl-k">=</span>a.mappedProperties<span class="pl-k">||</span>{};a.copiedProperties<span class="pl-k">=</span>a.copiedProperties<span class="pl-k">||</span>{};<span class="pl-k">return</span> a}<span class="pl-k">function</span> <span class="pl-en">h</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(b)<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(b)<span class="pl-k">?</span>[]<span class="pl-k">:</span>[b]);<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(c)<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(c)<span class="pl-k">?</span>[]<span class="pl-k">:</span>[c]);<span class="pl-k">return</span> e.utils.arrayGetDistinctValues(b.<span class="pl-c1">concat</span>(c))}<span class="pl-k">function</span> <span class="pl-en">F</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>,<span class="pl-smi">d</span>,<span class="pl-smi">k</span>,<span class="pl-smi">l</span>,<span class="pl-smi">n</span>){<span class="pl-k">var</span> t<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(e.utils.unwrapObservable(c));l<span class="pl-k">=</span>l<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(f.isMapped(b)){<span class="pl-k">var</span> g<span class="pl-k">=</span>e.utils.unwrapObservable(b)[p];a<span class="pl-k">=</span>E(g,a)}<span class="pl-k">var</span> j<span class="pl-k">=</span>n<span class="pl-k">||</span>k,<span class="pl-en">h</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a[d]<span class="pl-k">&amp;&amp;</span>a[d].create <span class="pl-k">instanceof</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Function</span>},<span class="pl-en">x</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span>G,g<span class="pl-k">=</span>e.dependentObservable;<span class="pl-c1">e</span>.<span class="pl-en">dependentObservable</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){c<span class="pl-k">=</span>c<span class="pl-k">||</span>{};a<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> a<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>a);<span class="pl-k">var</span> d<span class="pl-k">=</span>c.deferEvaluation,M<span class="pl-k">=!</span><span class="pl-c1">1</span>;c.deferEvaluation<span class="pl-k">=!</span><span class="pl-c1">0</span>;a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">H</span>(a,b,c);<span class="pl-k">if</span>(<span class="pl-k">!</span>d){<span class="pl-k">var</span> g<span class="pl-k">=</span>a,d<span class="pl-k">=</span>e.dependentObservable;e.dependentObservable<span class="pl-k">=</span>H;a<span class="pl-k">=</span>e.isWriteableObservable(g);e.dependentObservable<span class="pl-k">=</span>d;d<span class="pl-k">=</span>H({<span class="pl-en">read</span>:<span class="pl-k">function</span>(){M<span class="pl-k">||</span>(e.utils.arrayRemoveItem(f,g),M<span class="pl-k">=!</span><span class="pl-c1">0</span>);<span class="pl-k">return</span> g.<span class="pl-c1">apply</span>(g,arguments)},write<span class="pl-k">:</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> g(a)},deferEvaluation<span class="pl-k">:!</span><span class="pl-c1">0</span>});d.__DO<span class="pl-k">=</span>g;a<span class="pl-k">=</span>d;f.<span class="pl-c1">push</span>(a)}<span class="pl-k">return</span> a};e.dependentObservable.fn<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">H.fn;e.computed<span class="pl-k">=</span>e.dependentObservable;b<span class="pl-k">=</span>e.utils.unwrapObservable(k)<span class="pl-k">instanceof</span> <span class="pl-c1">Array</span><span class="pl-k">?</span>a[d].create({data<span class="pl-k">:</span>b<span class="pl-k">||</span>c,parent<span class="pl-k">:</span>j,skip<span class="pl-k">:</span>N})<span class="pl-k">:</span>a[d].create({data<span class="pl-k">:</span>b<span class="pl-k">||</span>c,parent<span class="pl-k">:</span>j});e.dependentObservable<span class="pl-k">=</span>g;e.computed<span class="pl-k">=</span>e.dependentObservable;<span class="pl-k">return</span> b},<span class="pl-en">u</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a[d]<span class="pl-k">&amp;&amp;</span>a[d].update <span class="pl-k">instanceof</span> <span class="pl-c1">Function</span>},<span class="pl-en">v</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">f</span>){<span class="pl-k">var</span> g<span class="pl-k">=</span>{data<span class="pl-k">:</span>f<span class="pl-k">||</span>c,parent<span class="pl-k">:</span>j,target<span class="pl-k">:</span>e.utils.unwrapObservable(b)};e.isWriteableObservable(b)<span class="pl-k">&amp;&amp;</span>(g.observable<span class="pl-k">=</span>b);<span class="pl-k">return</span> a[d].update(g)};<span class="pl-k">if</span>(n<span class="pl-k">=</span>I.get(c))<span class="pl-k">return</span> n;d<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(t){<span class="pl-k">var</span> t<span class="pl-k">=</span>[],s<span class="pl-k">=!</span><span class="pl-c1">1</span>,<span class="pl-en">m</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> a};</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">a[d]<span class="pl-k">&amp;&amp;</span>a[d].key<span class="pl-k">&amp;&amp;</span>(m<span class="pl-k">=</span>a[d].key,s<span class="pl-k">=!</span><span class="pl-c1">0</span>);e.isObservable(b)<span class="pl-k">||</span>(b<span class="pl-k">=</span>e.observableArray([]),<span class="pl-c1">b</span>.<span class="pl-en">mappedRemove</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> <span class="pl-en">a?a</span>:<span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> b<span class="pl-k">===</span>m(a)};<span class="pl-k">return</span> b.<span class="pl-c1">remove</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> c(m(a))})},<span class="pl-c1">b</span>.<span class="pl-en">mappedRemoveAll</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span>C(a,m);<span class="pl-k">return</span> b.<span class="pl-c1">remove</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span>e.utils.arrayIndexOf(c,m(a))})},<span class="pl-c1">b</span>.<span class="pl-en">mappedDestroy</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> <span class="pl-en">a?a</span>:<span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> b<span class="pl-k">===</span>m(a)};<span class="pl-k">return</span> b.destroy(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> c(m(a))})},<span class="pl-c1">b</span>.<span class="pl-en">mappedDestroyAll</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span>C(a,m);<span class="pl-k">return</span> b.destroy(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">e.utils.arrayIndexOf(c,m(a))})},<span class="pl-c1">b</span>.<span class="pl-en">mappedIndexOf</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span>C(b(),m);a<span class="pl-k">=</span>m(a);<span class="pl-k">return</span> e.utils.arrayIndexOf(c,a)},<span class="pl-c1">b</span>.<span class="pl-en">mappedGet</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> b()[b.mappedIndexOf(a)]},<span class="pl-c1">b</span>.<span class="pl-en">mappedCreate</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!==</span>b.mappedIndexOf(a))<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>There already is an object with the key that you specified.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">var</span> c<span class="pl-k">=</span>h()<span class="pl-k">?</span>x(a)<span class="pl-k">:</span>a;u()<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>v(c,a),e.isWriteableObservable(c)<span class="pl-k">?</span>c(a)<span class="pl-k">:</span>c<span class="pl-k">=</span>a);b.<span class="pl-c1">push</span>(c);<span class="pl-k">return</span> c});n<span class="pl-k">=</span>C(e.utils.unwrapObservable(b),m).<span class="pl-c1">sort</span>();g<span class="pl-k">=</span>C(c,m);s<span class="pl-k">&amp;&amp;</span>g.<span class="pl-c1">sort</span>();s<span class="pl-k">=</span>e.utils.compareArrays(n,g);n<span class="pl-k">=</span>{};<span class="pl-k">var</span> J,A<span class="pl-k">=</span>e.utils.unwrapObservable(c),</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">y<span class="pl-k">=</span>{},z<span class="pl-k">=!</span><span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(J<span class="pl-k">=</span>A.<span class="pl-c1">length</span>;g<span class="pl-k">&lt;</span>J;g<span class="pl-k">++</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span>m(A[g]);<span class="pl-k">if</span>(<span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">===</span>r<span class="pl-k">||</span>r <span class="pl-k">instanceof</span> <span class="pl-c1">Object</span>){z<span class="pl-k">=!</span><span class="pl-c1">1</span>;<span class="pl-k">break</span>}y[r]<span class="pl-k">=</span>A[g]}<span class="pl-k">var</span> A<span class="pl-k">=</span>[],B<span class="pl-k">=</span><span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(J<span class="pl-k">=</span>s.<span class="pl-c1">length</span>;g<span class="pl-k">&lt;</span>J;g<span class="pl-k">++</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span>s[g],q,w<span class="pl-k">=</span>l<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>g<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>;<span class="pl-k">switch</span>(r.<span class="pl-c1">status</span>){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>added<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">var</span> D<span class="pl-k">=</span>z<span class="pl-k">?</span>y[r.<span class="pl-c1">value</span>]<span class="pl-k">:</span>K(e.utils.unwrapObservable(c),r.<span class="pl-c1">value</span>,m);q<span class="pl-k">=</span>F(<span class="pl-k">void</span> <span class="pl-c1">0</span>,D,a,d,b,w,k);h()<span class="pl-k">||</span>(q<span class="pl-k">=</span>e.utils.unwrapObservable(q));w<span class="pl-k">=</span>O(e.utils.unwrapObservable(c),D,n);q<span class="pl-k">===</span>N<span class="pl-k">?</span>B<span class="pl-k">++:</span>A[w<span class="pl-k">-</span>B]<span class="pl-k">=</span>q;n[w]<span class="pl-k">=!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>retained<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>D<span class="pl-k">=</span>z<span class="pl-k">?</span>y[r.<span class="pl-c1">value</span>]<span class="pl-k">:</span>K(e.utils.unwrapObservable(c),r.<span class="pl-c1">value</span>,m);q<span class="pl-k">=</span>K(b,r.<span class="pl-c1">value</span>,m);F(q,D,a,d,b,w,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">k);w<span class="pl-k">=</span>O(e.utils.unwrapObservable(c),D,n);A[w]<span class="pl-k">=</span>q;n[w]<span class="pl-k">=!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>deleted<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>q<span class="pl-k">=</span>K(b,r.<span class="pl-c1">value</span>,m)}t.<span class="pl-c1">push</span>({<span class="pl-c1">event</span><span class="pl-k">:</span>r.<span class="pl-c1">status</span>,item<span class="pl-k">:</span>q})}b(A);a[d]<span class="pl-k">&amp;&amp;</span>a[d].arrayChanged<span class="pl-k">&amp;&amp;</span>e.utils.arrayForEach(t,<span class="pl-k">function</span>(<span class="pl-smi">b</span>){a[d].arrayChanged(b.<span class="pl-c1">event</span>,b.item)})}<span class="pl-k">else</span> <span class="pl-k">if</span>(P(c)){b<span class="pl-k">=</span>e.utils.unwrapObservable(b);<span class="pl-k">if</span>(<span class="pl-k">!</span>b){<span class="pl-k">if</span>(h())<span class="pl-k">return</span> s<span class="pl-k">=</span>x(),u()<span class="pl-k">&amp;&amp;</span>(s<span class="pl-k">=</span>v(s)),s;<span class="pl-k">if</span>(u())<span class="pl-k">return</span> v(s);b<span class="pl-k">=</span>{}}u()<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>v(b));I.save(c,b);<span class="pl-k">if</span>(u())<span class="pl-k">return</span> b;Q(c,<span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span>l.<span class="pl-c1">length</span><span class="pl-k">?</span>l<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d<span class="pl-k">:</span>d;<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">==</span>e.utils.arrayIndexOf(a.ignore,f))<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span>e.utils.arrayIndexOf(a.copy,f))b[d]<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">c[d];<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">object&quot;!=typeof c[d]&amp;&amp;&quot;array&quot;!=typeof c[d]&amp;&amp;0&lt;a.observe.length&amp;&amp;-1==e.utils.arrayIndexOf(a.observe,f))b[d]=c[d],a.copiedProperties[f]=!0;else{var g=I.get(c[d]),k=F(b[d],c[d],a,d,b,f,b),g=g||k;if(0&lt;a.observe.length&amp;&amp;-1==e.utils.arrayIndexOf(a.observe,f))b[d]=g(),a.copiedProperties[f]=!0;else{if(e.isWriteableObservable(b[d])){if(g=e.utils.unwrapObservable(g),b[d]()!==g)b[d](g)}else g=void 0===b[d]?g:e.utils.unwrapObservable(g),b[d]=g;a.mappedProperties[f]=!0}}})}else switch(f.getType(c)){case &quot;function</span><span class="pl-pds">&quot;</span></span>:<span class="pl-en">u</span>()<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">e.isWriteableObservable(c)<span class="pl-k">?</span>(c(v(c)),b<span class="pl-k">=</span>c)<span class="pl-k">:</span>b<span class="pl-k">=</span>v(c)<span class="pl-k">:</span>b<span class="pl-k">=</span>c;<span class="pl-k">break</span>;<span class="pl-en">default</span>:<span class="pl-en">if</span>(<span class="pl-smi">e</span>.isWriteableObservable(b))<span class="pl-k">return</span> q<span class="pl-k">=</span>u()<span class="pl-k">?</span>v(b)<span class="pl-k">:</span>e.utils.unwrapObservable(c),b(q),q;h()<span class="pl-k">||</span>u();b<span class="pl-k">=</span>h()<span class="pl-k">?</span>x()<span class="pl-k">:</span>e.observable(e.utils.unwrapObservable(c));u()<span class="pl-k">&amp;&amp;</span>b(v(b))}<span class="pl-k">return</span> b}<span class="pl-k">function</span> <span class="pl-en">O</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-c1">0</span>,e<span class="pl-k">=</span>b.<span class="pl-c1">length</span>;d<span class="pl-k">&lt;</span>e;d<span class="pl-k">++</span>)<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">0</span><span class="pl-k">!==</span>a[d]<span class="pl-k">&amp;&amp;</span>b[d]<span class="pl-k">===</span>c)<span class="pl-k">return</span> d;<span class="pl-k">return</span> <span class="pl-c1">null</span>}<span class="pl-k">function</span> <span class="pl-en">R</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> a;c<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>c(b));<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(a)<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>b);<span class="pl-k">return</span> e.utils.unwrapObservable(a)}<span class="pl-k">function</span> <span class="pl-en">K</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>){b<span class="pl-k">=</span>e.utils.unwrapObservable(b);<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-c1">0</span>,f<span class="pl-k">=</span>b.<span class="pl-c1">length</span>;d<span class="pl-k">&lt;</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">f;d<span class="pl-k">++</span>){<span class="pl-k">var</span> l<span class="pl-k">=</span>b[d];<span class="pl-k">if</span>(R(l,a)<span class="pl-k">===</span>c)<span class="pl-k">return</span> l}<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>When calling ko.update*, the key &#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; was not found!<span class="pl-pds">&quot;</span></span>);}<span class="pl-k">function</span> <span class="pl-en">C</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">return</span> e.utils.arrayMap(e.utils.unwrapObservable(b),<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> c<span class="pl-k">?</span>R(a,c)<span class="pl-k">:</span>a})}<span class="pl-k">function</span> <span class="pl-en">Q</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(b))<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">0</span>;a<span class="pl-k">&lt;</span>b.<span class="pl-c1">length</span>;a<span class="pl-k">++</span>)c(a);<span class="pl-k">else</span> <span class="pl-k">for</span>(a <span class="pl-k">in</span> b)c(a)}<span class="pl-k">function</span> <span class="pl-en">P</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span>f.getType(b);<span class="pl-k">return</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>c<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>c)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">null</span><span class="pl-k">!==</span>b}<span class="pl-k">function</span> <span class="pl-en">T</span>(){<span class="pl-k">var</span> b<span class="pl-k">=</span>[],c<span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-en">save</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span>e.utils.arrayIndexOf(b,a);<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>f<span class="pl-k">?</span>c[f]<span class="pl-k">=</span>d<span class="pl-k">:</span>(b.<span class="pl-c1">push</span>(a),c.<span class="pl-c1">push</span>(d))};</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">get</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){a<span class="pl-k">=</span>e.utils.arrayIndexOf(b,a);<span class="pl-k">return</span> <span class="pl-c1">0</span><span class="pl-k">&lt;=</span>a<span class="pl-k">?</span>c[a]<span class="pl-k">:void</span> <span class="pl-c1">0</span>}}<span class="pl-k">function</span> <span class="pl-en">S</span>(){<span class="pl-k">var</span> b<span class="pl-k">=</span>{},<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c;<span class="pl-k">try</span>{c<span class="pl-k">=</span>a}<span class="pl-k">catch</span>(e){c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>$$$<span class="pl-pds">&quot;</span></span>}a<span class="pl-k">=</span>b[c];<span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">===</span>a<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">T</span>,b[c]<span class="pl-k">=</span>a);<span class="pl-k">return</span> a};<span class="pl-c1">this</span>.<span class="pl-en">save</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){c(a).save(a,b)};<span class="pl-c1">this</span>.<span class="pl-en">get</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> c(a).get(a)}}<span class="pl-k">var</span> p<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>__ko_mapping__<span class="pl-pds">&quot;</span></span>,H<span class="pl-k">=</span>e.dependentObservable,B<span class="pl-k">=</span><span class="pl-c1">0</span>,G,I,L<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>create<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>update<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>key<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>arrayChanged<span class="pl-pds">&quot;</span></span>],N<span class="pl-k">=</span>{},x<span class="pl-k">=</span>{include<span class="pl-k">:</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>_destroy<span class="pl-pds">&quot;</span></span>],ignore<span class="pl-k">:</span>[],copy<span class="pl-k">:</span>[],observe<span class="pl-k">:</span>[]},j<span class="pl-k">=</span>x;<span class="pl-c1">f</span>.<span class="pl-en">isMapped</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span>(b<span class="pl-k">=</span>e.utils.unwrapObservable(b))<span class="pl-k">&amp;&amp;</span>b[p]};f.fromJS<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>arguments.<span class="pl-c1">length</span>)<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>When calling ko.fromJS, pass the object you want to convert.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">try</span>{B<span class="pl-k">++||</span>(G<span class="pl-k">=</span>[],I<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">S</span>);<span class="pl-k">var</span> c,a;<span class="pl-c1">2</span><span class="pl-k">==</span>arguments.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(arguments[<span class="pl-c1">1</span>][p]<span class="pl-k">?</span>a<span class="pl-k">=</span>arguments[<span class="pl-c1">1</span>]<span class="pl-k">:</span>c<span class="pl-k">=</span>arguments[<span class="pl-c1">1</span>]);<span class="pl-c1">3</span><span class="pl-k">==</span>arguments.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>arguments[<span class="pl-c1">1</span>],a<span class="pl-k">=</span>arguments[<span class="pl-c1">2</span>]);a<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>E(c,a[p]));c<span class="pl-k">=</span>z(c);<span class="pl-k">var</span> d<span class="pl-k">=</span>F(a,b,c);a<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>a);<span class="pl-k">if</span>(<span class="pl-k">!--</span>B)<span class="pl-k">for</span>(;G.<span class="pl-c1">length</span>;){<span class="pl-k">var</span> e<span class="pl-k">=</span>G.<span class="pl-c1">pop</span>();e<span class="pl-k">&amp;&amp;</span>(e(),e.__DO.throttleEvaluation<span class="pl-k">=</span>e.throttleEvaluation)}d[p]<span class="pl-k">=</span>E(d[p],c);<span class="pl-k">return</span> d}<span class="pl-k">catch</span>(f){<span class="pl-k">throw</span> B<span class="pl-k">=</span><span class="pl-c1">0</span>,f;}};<span class="pl-c1">f</span>.<span class="pl-en">fromJSON</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span>e.utils.parseJson(b);</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">arguments[<span class="pl-c1">0</span>]<span class="pl-k">=</span>c;<span class="pl-k">return</span> f.fromJS.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,arguments)};<span class="pl-c1">f</span>.<span class="pl-en">updateFromJS</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">f</span>.<span class="pl-en">updateFromJSON</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">f</span>.<span class="pl-en">toJS</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){j<span class="pl-k">||</span>f.resetDefaultOptions();<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>arguments.<span class="pl-c1">length</span>)<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>When calling ko.mapping.toJS, pass the object you want to convert.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(j.ignore))<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.defaultOptions().ignore should be an array.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(j.include))<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.defaultOptions().include should be an array.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(j.copy))<span class="pl-k">throw</span> Error(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.defaultOptions().copy should be an array.<span class="pl-pds">&quot;</span></span>);c<span class="pl-k">=</span>z(c,b[p]);<span class="pl-k">return</span> f.visitModel(b,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> e.utils.unwrapObservable(a)},c)};<span class="pl-c1">f</span>.<span class="pl-en">toJSON</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span>f.toJS(b,c);<span class="pl-k">return</span> e.utils.stringifyJson(a)};<span class="pl-c1">f</span>.<span class="pl-en">defaultOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">&lt;</span>arguments.<span class="pl-c1">length</span>)j<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">arguments[<span class="pl-c1">0</span>];<span class="pl-k">else</span> <span class="pl-k">return</span> j};<span class="pl-c1">f</span>.<span class="pl-en">resetDefaultOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(){j<span class="pl-k">=</span>{include<span class="pl-k">:</span>x.include.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>),ignore<span class="pl-k">:</span>x.ignore.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>),copy<span class="pl-k">:</span>x.copy.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>)}};<span class="pl-c1">f</span>.<span class="pl-en">getType</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">if</span>(b<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> b){<span class="pl-k">if</span>(b.<span class="pl-c1">constructor</span><span class="pl-k">===</span><span class="pl-c1">Date</span>)<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>date<span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(b.<span class="pl-c1">constructor</span><span class="pl-k">===</span><span class="pl-c1">Array</span>)<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span>}<span class="pl-k">return</span> <span class="pl-k">typeof</span> b};<span class="pl-c1">f</span>.<span class="pl-en">visitModel</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>){a<span class="pl-k">=</span>a<span class="pl-k">||</span>{};a.visitedObjects<span class="pl-k">=</span>a.visitedObjects<span class="pl-k">||</span><span class="pl-k">new</span> <span class="pl-en">S</span>;<span class="pl-k">var</span> d,k<span class="pl-k">=</span>e.utils.unwrapObservable(b);<span class="pl-k">if</span>(P(k))a<span class="pl-k">=</span>z(a,k[p]),c(b,a.parentName),d<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(k)<span class="pl-k">?</span>[]<span class="pl-k">:</span>{};<span class="pl-k">else</span> <span class="pl-k">return</span> c(b,a.parentName);a.visitedObjects.save(b,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">d);<span class="pl-k">var</span> l<span class="pl-k">=</span>a.parentName;Q(k,<span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>(a.ignore<span class="pl-k">&amp;&amp;-</span><span class="pl-c1">1</span><span class="pl-k">!=</span>e.utils.arrayIndexOf(a.ignore,b))){<span class="pl-k">var</span> j<span class="pl-k">=</span>k[b],g<span class="pl-k">=</span>a,h<span class="pl-k">=</span>l<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>f.getType(k)<span class="pl-k">?</span>l<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>(l<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>),h<span class="pl-k">+=</span>b);g.parentName<span class="pl-k">=</span>h;<span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span>e.utils.arrayIndexOf(a.copy,b)<span class="pl-k">&amp;&amp;-</span><span class="pl-c1">1</span><span class="pl-k">===</span>e.utils.arrayIndexOf(a.include,b)<span class="pl-k">&amp;&amp;</span>k[p]<span class="pl-k">&amp;&amp;</span>k[p].mappedProperties<span class="pl-k">&amp;&amp;!</span>k[p].mappedProperties[b]<span class="pl-k">&amp;&amp;</span>k[p].copiedProperties<span class="pl-k">&amp;&amp;!</span>k[p].copiedProperties[b]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(k)))<span class="pl-k">switch</span>(f.getType(e.utils.unwrapObservable(j))){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>g<span class="pl-k">=</span>a.visitedObjects.get(j);</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">d[b]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>f.getType(g)<span class="pl-k">?</span>g<span class="pl-k">:</span>f.visitModel(j,c,a);<span class="pl-k">break</span>;<span class="pl-k">default</span><span class="pl-k">:</span>d[b]<span class="pl-k">=</span>c(j,a.parentName)}}});<span class="pl-k">return</span> d}});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05564s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-06533d99d3f0ca9115a0563dec4017e1bfad7758231e12b95a178cef2cdc3d4c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-59cbed91abaeebed35de0a12f8c3adfea46b14dd56c5019b18a7dcdaf3c88a92.js"></script>
      
      

  </body>
</html>

