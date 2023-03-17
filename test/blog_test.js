const server = require("../index")
const chaiHttp = require('chai-http')
const chai = require('chai')
const utils = require("../models/userSchema");
const routes = require("../routes/userRoute");

chai.should();
chai.use(chaiHttp)
// test case of blogAdd API
describe("CREATE Blog API", () => {
    describe("POST API/blog", () => {
        it("it will return Add blog details", (done) => {
            const data = {
                blogTitle:  "hiiii",
                blogDescription : "hii its my blog i want be blogger"
                 //blogLikes:1
            }
            chai
                .request(server)
                .post("/blog/add/63ef6508e99e1d23c365e4f9")
                .send(data)
                .end((err,res) => {
                    res.should.have.status(201)
                    res.should.be.a("object")
                    res.body.should.have.property("success").eq("success");
                    res.body.should.have.property("message").eq("Blog published successfully")
                    done();
                })
        })

    })

})

// Test case of list of blog API

describe("test case of List of blog API ", () => {
    describe("POST API/listBlog", () => {
        it("it will return a list of blog API details", (done) => {
    
            chai
                .request(server)
                .post("/blog/list")
                .end((err,res) => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.should.have.property("success").eq("success")
                    res.body.should.have.property("message").eq("blog  list has  displayed successfully")
                    done();
                })
        })
    })
})

// test case of blog Details  API
describe("test case of blog Details  API", () => {
    describe("POST API/detalsBlog", () => {
        it("it will return the blog details", (done) => {
            chai
                .request(server)
                .get("/blog/details/63ef6508e99e1d23c365e4f9")
                .end((err,res) => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.should.have.property("success").eq("success")
                    res.body.should.have.property("message").eq("blog details founded successfully")
                    done();
                })
        })
    })
})

// test case for blog search API

describe("test case of blog search API ", () => {
    describe("POST API/searchblog", () => {
        it("it will return the blog search results", (done) => {
            const data = {
                blogTitle: "hey"
            }
            chai
                .request(server)
                .get("/blog/search")
                .send(data)
                .end((err,res) => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.should.have.property("success").eq("success")
                    res.body.should.have.property("message").eq("blog has  searched successful")
                    done();
                })
        })
    })
})

// test case blog  edit API
 describe("blog edit API ", () => {
    describe("POST API/editBlog", () => {
        it("it will return the blog edit results", (done) => {
            const data = {
                "blogTitle": "hiiii hey its",
                "blogDescription":"hii its my blogggg i want be blogger",
                "blogLikes": 8            
            }
            chai
                .request(server)
                .patch("/blog/edit/63ef73bf294f4e4986b1f971")
                .send(data)
                .end((err,res) => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.should.have.property("success").eq("success")
                    res.body.should.have.property("message").eq("blog has updated successfully")
                    done();
                })
        })

    })
 });

 // test case blog delete API 
 describe("blog delete API ", () => {
    describe("POST API/deleteblog", () => {
        it("it will return the blog deleted results", (done) => {
            chai
                .request(server)
                .delete("/blog/delete/63ef73bf294f4e4986b1f971")
                .end((err,res) => {
                    res.should.have.status(200)
                    res.should.be.a("object")
                    res.body.should.have.property("success").eq("success")
                    res.body.should.have.property("message").eq("blog has deleted successfully")
                    done();  
                })
        })
    })
 })

 // test case blog LIKES  API
