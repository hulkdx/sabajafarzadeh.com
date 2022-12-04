/* eslint-disable */
import React from 'react';

export default [
  {
    title: 'Terraform module',
    content: `The reason behind creating a terraform modules is to hide the complexity of creating some of the services, for instance to create a vpc with igw and nat, you need the following code without the modules, you need to create a lot of terraform resources, but with the module it can be just couple lines of code.

    I've decided to not use terraform modules because, you really don't know under the hood what kind of resources a module can create and there is not much power of control over changing resources and sometimes have to read the module code to understand what it tries to acheive.`,
    date: '2022-12-04',
  },
  {
    title: 'eks',
    content: (
      <>
        <h2 id="learning">Learning</h2>
        <p>
          I’ve learned the basics about eks and deployed using iac with terraform.{' '}
          <a href="https://github.com/hulkdx/FindProfessionalInfra">Source code </a>
          is on a public repository now but this can be changed.
        </p>
        <p>
          The complexity of eks is too much but I had to learn other related aws services such as
          vpc, and I documented all of them in{' '}
          <a href="https://github.com/hulkdx/DocsK8S/tree/main/aws">here</a>. The issue is also many
          tutorial about eks is outdated and just simply wrong but are good for a beginner like me.
        </p>
        <h2 id="infra-cost-optimization">Infra cost optimization</h2>
        <p>
          The infra cost of should be around $80 per month. I have not used
          <code>RDS</code> and node groups are public now to save monthly cost of the cluster and
          I’ll use heruku postgres for the database which is free until this project grows.
        </p>
        <h2 id="future-dev">Future development</h2>
        <p>
          I need to study next on how to structure the codebase/repositories. Should it be that
          microservices in a separate repositories and infra code in a separate repositories?
        </p>
        <br />
      </>
    ),
    date: '2022-11-29',
  },
  {
    title: 'Find Professional project',
    content: (
      <>
        Developing <a href="https://github.com/hulkdx/FindProfessional">Find Professional</a>{' '}
        project. It's Android, iOS app done.
        <br />
        <br />
        The backend service will be done using <code>Spring boot</code> and <code>Kotlin</code>.
        Currently I'm learning <code>kubernetes</code> to deploy it to <code>aws</code>. I learned a
        basic kubernetes concepts with techworld with nana (and I highly recommend that). I need to
        know more about EKS service and decided to start learning it with a{' '}
        <a href="https://udemy.com/course/aws-eks-kubernetes-masterclass-devops-microservices/">
          udemy course
        </a>
        .
        <br />
        <br />
        <a href="https://github.com/hulkdx/DocsK8S">
          <b>DocsK8S</b>
        </a>
      </>
    ),
    date: '2022-11-11',
  },
  {
    title: 'First post',
    content: (
      <>
        sabajafarzadeh.com is live. This webpage is created with reactjs and netlify.
        <br />
        <a href="https://github.com/hulkdx/hulkdx_website_frontend">Source code</a>
      </>
    ),
    date: '2022-11-07',
  },
];
