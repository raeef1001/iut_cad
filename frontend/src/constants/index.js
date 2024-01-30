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
    title: "Application Development",
    icon: web,
  },
  {
    title: "Robotics",
    icon: mobile,
  },
  {
    title: "Network & Communication",
    icon: backend,
  },
  {
    title: " Multimedia & Gaming",
    icon: creator,
  },
 
];



const Goals = [
  {
    Goal:
    "Unifying Technology Enthusiasts, Fostering Innovation, and Nurturing Digital Literacy. Together, we Code the Future, Connect the World, and Inspire Excellence in the Ever-Evolving Realm of Computing.",

  },
  {
    Goal:
    "Fueling Progress Through Digital Excellence. We're a Global Community of Innovators, Educators, and Visionaries, Embracing Technology's Challenges and Opportunities to Shape Tomorrow's Digital Landscape.",
   
  },
  {
    Goal:
      " Dedicated to Advancing Computer Science and Building a Brighter Digital Future. We Encourage Curiosity, Foster Collaboration, and Champion Technological Proficiency, Uniting Members in the Pursuit of Innovation and Excellence.",
   
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
