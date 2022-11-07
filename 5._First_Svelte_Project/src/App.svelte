
<script>
    import Date from "./components/Date.svelte";

  const name = "Anders";
  const  lastName = "Latif"
 
</script>


<h2 id="page-title">First Svelte Project</h2>
<div>More content for {name}.{lastName}</div> 
<Date></Date>

<style>
  #page-title {
    color: blue;
  }
</style>
