from django.conf.urls.defaults import patterns, include, url
from django.views.generic.simple import direct_to_template, redirect_to


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf import settings
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mythoughtjot.views.home', name='home'),
    # url(r'^mythoughtjot/', include('mythoughtjot.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    #url(r'^$', 'django.contrib.auth.views.login'),
    url(r'^$', 'canvas.views.index'),
    url(r'about/$', 'django.views.generic.simple.direct_to_template', {'template':'about.html'}),
    url(r'the-team/$', 'django.views.generic.simple.direct_to_template', {'template':'team.html'}),
    #url(r'^project/(\d+)/$', redirect_to, {'url': 'project.html'}),
    
    url(r'^project/myprojects/$', 'canvas.views.myprojects'),
    url(r'^project/$', redirect_to, {'url': 'myprojects/'}),
    url(r'^myprojects/$', redirect_to, {'url': '/project/myprojects/'}),
    
    url(r'^canvas/(\d+)/$', 'canvas.views.canvas'),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('registration.backends.default.urls')),
    url(r'^messages/', include('postman.urls')),
    url(r'^project/create/$', 'canvas.views.create_project'),
    url(r'^project/(\d+)/$','canvas.views.project'),
    url(r'^project/(\d+)/delete/$', 'canvas.views.project_delete'),
    url(r'^project/(\d+)/edit/$', 'canvas.views.project_edit'),
    
    url(r'^canvas/create/$', 'canvas.views.create_canvas'),
    url(r'^canvas/(\d+)/edit/$', 'canvas.views.canvas_edit'),
    url(r'^canvas/(\d+)/save/$', 'canvas.views.canvas_save'),
    url(r'^canvas/(\d+)/edit_modal/$', 'canvas.views.canvas_edit_modal'),
    url(r'^canvas/(\d+)/delete/$', 'canvas.views.canvas_delete'),
    url(r'^canvas/create_modal/$', 'canvas.views.create_canvas_modal'),
    url(r'^canvas/(\d+)/add-collaborator/$', 'canvas.views.canvas_add_collaborator'),
    url(r'^canvas/(\d+)/remove-collaborator/(\d+)/$', 'canvas.views.canvas_remove_collaborator'),
    url(r'^user/update/$', 'canvas.views.update_profile'),
    url(r'^user/(\w+)/$', 'canvas.views.view_profile'),
    url(r'^canvas/(\d+)/load_canvas/$', 'canvas.views.load_canvas'),
    url(r'^canvas/(\d+)/load_mini_collaborators/$', 'canvas.views.collaborator_mini_form'),
    url(r'^check_message_count/$', 'canvas.views.check_messages'),
)

if settings.DEBUG:
    from django.views.static import serve
    _media_url = settings.MEDIA_URL
    if _media_url.startswith('/'):
        _media_url = _media_url[1:]
        urlpatterns += patterns('',
            (r'^%s(?P<path>.*)$' % _media_url,
             serve,
            {'document_root': settings.MEDIA_ROOT}))
    del(_media_url, serve)
