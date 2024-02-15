import{
  backend,
  creator,
  mobile,
  web,
} from "../assets";
import image4 from "../assets/loading_images/4.gif"

const navLinks = [
 
  {
    id: "Achievements",
    title: "Achievements",
  },
  {
    id: "Activities",
    title: "Activities",
  },
  {
    id: "Blog",
    title: "Sponsors",
  },
  {
    id: "About",
    title: "About",
  },

 
 
]

const services = [
  {
    title: "SolidWorks",
    icon: web,
  },
  {
    title: "AutoCAD", 
    icon: mobile,
  },
  {
    title: "Formula IUT",
    icon: backend,
  },
  {
    title: "CAD Design",
    icon: creator,
  },
 
];



const Goals = [
  {
    Goal:
    "Our goal is to enhance members' proficiency in CAD software and techniques through comprehensive training and workshops, fostering confident and creative problem-solving abilities.",

  },
  {
    Goal:
    "We aim to encourage collaboration among members from various disciplines, promoting the exchange of ideas and expertise to address complex design challenges across different fields.",
   
  },
  {
    Goal:
      " We offer networking events, guest lectures, and career workshops to connect members with industry professionals and job opportunities, supporting their professional growth beyond academia.",
   
  },
];



var blogElements =[
  {
    attributes: {
      title: "blog",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "blog",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "blog",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
      
    },
  },
]

var achievementsElements =[
  {
    attributes: {
      title: "achievements ",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "achievements ",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "achievements ",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
      
    },
  },
]  

var activitiesElements =[
  {
    attributes: {
      title: "activity",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "activity",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "activity",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
      
    },
  },
]
var CommitteeElements =[
  {type:"members",
      id:1,
      title:"Committee 1",
      description:"This is Committee 1",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
      id:2,
      title:"committee 2",
      description:"This is committee 2",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
      id:3,
      title:"committee 3",
      description:"This is committee 3",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
  
      id:4,
      title:"committee 4",
      description:"This is committee 4",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
  
      id:5,
      title:"committee 5",
      description:"This is committee 5",
      image:image4,
      date:"12/12/12"
  }
]
var totalData = [...blogElements,...achievementsElements,...activitiesElements,...CommitteeElements]

export { services,  Goals, navLinks ,blogElements,achievementsElements,activitiesElements,CommitteeElements,totalData};
