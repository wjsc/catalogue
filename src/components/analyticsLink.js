window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}

export const analyticsLink = {
    init: () => {
        gtag('js', new Date());
        gtag('config', 'UA-111696291-1',{
          'custom_map': {'dimension1': 'artist', 'dimension2': 'track'}
        });
        window.onpopstate = ev => {
          gtag('config', 'UA-111696291-1', {
              'page_path': window.location.pathname + window.location.hash,
              'custom_map': {
                  'dimension1': 'artist', 
                  'dimension2': 'track'
              }
            });
        };
    },
    collect: (track) => {
        gtag('event', 'play', {   
                'artist': track.artist.name,
                'track': track.title
            });
    }
}